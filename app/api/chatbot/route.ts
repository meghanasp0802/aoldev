import { Configuration, OpenAIApi } from 'openai';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Initialize OpenAI API client with the API key from the environment variable
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Handle POST requests
export async function POST(req: Request) {
  try {
    // Parse the incoming request JSON body
    const body = await req.json();
    console.log("Request Body:", body);

    // Make the API call to OpenAI's chat API with the user's message
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo', // You can change this to another model if needed
      messages: [{ role: 'user', content: body.message || 'Hello!' }],
    });

    // Log the OpenAI response for debugging
    console.log('OpenAI Response:', response.data);

    // Return the response data to the client
    return NextResponse.json({
      response: response.data.choices[0]?.message?.content || 'No response from AI.',
    });
  } catch (error: any) {
    // Log the error details for debugging
    console.error('Error occurred:', error.message);
    console.error('Error details:', error.response?.data || error);

    // Return an error message in the response
    return NextResponse.json(
      { error: 'Failed to process the request.' },
      { status: 500 }
    );
  }
}
