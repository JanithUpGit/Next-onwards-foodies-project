'use server';

import { redirect } from "next/dist/server/api-utils";
import saveMeal from "./meals";

export async function shareMeal(formData){
    
    const data = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),

    };

    await saveMeal(data);
    redirect('/meals');

  }