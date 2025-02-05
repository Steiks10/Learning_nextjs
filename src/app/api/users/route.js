import { NextResponse } from 'next/server'
export function GET(){
    
    return NextResponse.json({
        "message": "Obteniendo datos"
    }) 
}

export async function POST(request){
    const data = await request.json()
    console.log(data)
    return NextResponse.json({
        "message": "Creando datos"
    }) 
}

export function PUT(){
    return NextResponse.json({
        "message": "Actualizando registro"
    }) 
}

export function DELETE(){
    return NextResponse.json({
        "message": "Borrando datos"
    }) 
}