import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request Body:", body);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: body.message || "Hello!" }],
    });

    console.log("OpenAI Response:", response.data);

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Error occurred:", error.message);
    console.error("Error details:", error.response?.data || error);

    return NextResponse.json(
      { error: "Failed to process the request." },
      { status: 500 }
    );
  }
}
