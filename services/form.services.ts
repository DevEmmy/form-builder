import prisma from "../lib/prisma"

export async function createForm(data: any) {
    const form = await prisma.form.create({
      data
    });
  
  return form;
  }