import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Required"),
  message: z.string()
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" }
  });

  return (
    <div className="w-full font-sans pb-20 bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/shivalik-plots.png" alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-accent">CONTACT</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-zinc-50 p-10 text-center border border-zinc-100">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center text-white mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Office Address</h3>
              <p className="text-zinc-500">124 Luxury Avenue, Gurugram</p>
            </div>
            <div className="bg-zinc-50 p-10 text-center border border-zinc-100">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center text-white mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Phone Number</h3>
              <p className="text-zinc-500">+91 98765 43210</p>
            </div>
            <div className="bg-zinc-50 p-10 text-center border border-zinc-100">
              <div className="w-16 h-16 mx-auto bg-accent rounded-full flex items-center justify-center text-white mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Email Address</h3>
              <p className="text-zinc-500">info@dharatalgreens.com</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormControl><Input placeholder="Your Name" className="h-14 bg-zinc-50 border-zinc-200 rounded-none" {...field} /></FormControl></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormControl><Input placeholder="Email Address" className="h-14 bg-zinc-50 border-zinc-200 rounded-none" {...field} /></FormControl></FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormControl><Input placeholder="Phone Number" className="h-14 bg-zinc-50 border-zinc-200 rounded-none" {...field} /></FormControl></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormControl><Textarea placeholder="Message" className="min-h-[150px] bg-zinc-50 border-zinc-200 rounded-none resize-none" {...field} /></FormControl></FormItem>
                )} />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-white h-14 px-10 text-base font-bold uppercase tracking-wider rounded-none">
                  SEND MESSAGE
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
