import { NextResponse } from 'next/server';

let mockados = [];

export async function GET() {
  return NextResponse.json(mockados);
}

export async function POST(req) {
  try {
    mockados = []
    
    const { idioma, nivel, nome } = await req.json();

    if (!idioma || !nivel || !nome) {
      return NextResponse.json(
        { erro: "Algum campo está sem registro" }, 
        { status: 400 }
      );
    }

    const values = {
      id: 1,
      idioma,
      nivel,
      nome,
    };

    mockados.push(values);

    return NextResponse.json(values, { status: 201 });
    
  } catch (error) {
    return NextResponse.json(
      { erro: `Formato de requisição inválido: ${error}` }, 
      { status: 400 }
    );
  }
}