// import { NextRequest, NextResponse } from 'next/server';

// const BACKEND_BASE_URL = 'https://servizobackend.onrender.com';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     console.log("Received Data:", body);

//     const backendUrl = `${BACKEND_BASE_URL}/api/chefs`;
//     console.log('Forwarding to:', backendUrl);

//     const apiResponse = await fetch(backendUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     const responseData = await apiResponse.json();

//     if (!apiResponse.ok) {
//       console.error("Backend API error:", responseData);
//       return NextResponse.json(
//         { message: responseData.message || 'Backend API error' }, 
//         { status: apiResponse.status }
//       );
//     }

//     return NextResponse.json({
//       message: "Data received and forwarded successfully",
//       receivedData: body,
//       apiResponse: responseData,
//     });
//   } catch (error: any) {
//     console.error("Error forwarding data:", error);
//     return NextResponse.json(
//       { message: "Error forwarding data to backend API", error: error.message },
//       { status: 500 }
//     );
//   }
// }


// app/api/careers/submit/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_BASE_URL = 'https://servizobackend.onrender.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // console.log("Received Data for forwarding:", body); // Optional: for debugging

    const backendUrl = `${BACKEND_BASE_URL}/api/chefs`;
    // console.log('Forwarding to:', backendUrl); // Optional: for debugging

    const apiResponse = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Potentially add an API key or other auth headers if your backend requires it
        // "Authorization": `Bearer ${process.env.BACKEND_API_KEY}`, 
      },
      body: JSON.stringify(body),
    });

    const responseData = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("Backend API error:", responseData, "Status:", apiResponse.status);
      return NextResponse.json(
        { message: responseData.message || 'Error processing application with backend service.', success: false }, 
        { status: apiResponse.status }
      );
    }

    return NextResponse.json({
      message: "Application forwarded successfully to backend.",
      success: true,
      // receivedData: body, // You might not want to send back the PII
      apiResponse: responseData, // Or selectively return parts of the backend response
    }, { status: 200 });

  } catch (error: unknown) { // Changed from any to unknown
    console.error("Error in /api/careers/submit route:", error);
    const errorMessage = "Internal server error while forwarding data.";
    if (error instanceof Error) {
        // Avoid exposing too much detail from internal errors to the client
        // errorMessage = error.message; // Use this if detailed error messages are safe/desired
        console.error("Specific error message:", error.message);
    }
    return NextResponse.json(
      { message: errorMessage, success: false, error: (error instanceof Error ? error.name : 'UnknownError') },
      { status: 500 }
    );
  }
}