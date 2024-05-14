import prisma from "../lib/prisma"

export async function createForm(data: any) {
    const form = await prisma.form.create({
      data
    });
  
  return form;
  }

export async function getForms(userId: string){
  const forms = await prisma.form.findMany({
    where:{
      userId: userId
    }
  })
  return forms
}

export async function getEachForm(id: string){
  const form = await prisma.form.findUnique({
    where:{
      id: id
    }
  })
  return form
}