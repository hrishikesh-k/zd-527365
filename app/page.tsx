import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  async function createInvoice(formData: FormData) {
    'use server'
 
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }
 
    console.log(rawFormData)
  }
 
  return <form action={createInvoice}>
    <input name="customerId" type="text" placeholder="Customer ID"/>
    <input name="amount" type="text" placeholder="Amount"/>
    <input name="status" type="text" placeholder="Status"/>
    <button type="submit">Submit</button>
  </form>
}
