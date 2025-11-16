import { NextResponse } from "next/server";
import connectDB from "@/app/libs/connectDB";
import UserModel from "@/app/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/app/libs/createToken";

// Interface for request body
interface LoginBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  await connectDB();

  const body: LoginBody = await req.json();
  const { email, password } = body;

  // Validate input
  if (!email || !password)
    return NextResponse.json(
      { message: "Email and password are required" },
      { status: 400 }
    );

  // Check if user exists
  const user = await UserModel.findOne({ email });
  if (!user)
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );

  // Generate token
  const token = generateToken(user._id.toString());

  return NextResponse.json({
    message: "Login successful",
    token,
    user: {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    },
  });
}
