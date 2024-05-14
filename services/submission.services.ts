import prisma from "../lib/prisma"

export async function createSubmission(data: any) {
    const submission = await prisma.formSubmission.create({
      data
    });
  
  return submission;
  }

export async function getSubmission(formId: string){
  const submissions = await prisma.formSubmission.findMany({
    where:{
      formId
    }
  })
  return submissions
}