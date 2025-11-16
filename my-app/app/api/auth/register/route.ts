import { NextResponse } from "next/server";
import connectDB from "@/app/libs/connectDB";
import UserModel from "@/app/models/User";
import bcrypt from "bcryptjs";
import { generateToken } from "@/app/libs/createToken";

// Interface inside the file
interface RegisterBody {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export async function POST(req: Request) {
  await connectDB();

  const body: RegisterBody = await req.json();
  const { username, email, password, confirmPassword } = body;

  // Validate
  if (!username || !email || !password || !confirmPassword)
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );

  if (password !== confirmPassword)
    return NextResponse.json(
      { message: "Passwords do not match" },
      { status: 400 }
    );

  delete body.confirmPassword;

  const existing = await UserModel.findOne({ email });
  if (existing)
    return NextResponse.json(
      { message: "Email already in use" },
      { status: 409 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username,
    email,
    password: hashedPassword,
  });

  const token = generateToken(user._id.toString());

  return NextResponse.json(
    {
      message: "User registered successfully",
      token,
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
      },
    },
    { status: 201 }
  );
}
