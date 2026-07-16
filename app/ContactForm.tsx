"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thank you. Our team will contact you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    className="h-[60px] border border-gray-200 px-5 w-full focus-visible:ring-0 focus-visible:border-[#4BBFB8] bg-white rounded-none text-base"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    className="h-[60px] border border-gray-200 px-5 w-full focus-visible:ring-0 focus-visible:border-[#4BBFB8] bg-white rounded-none text-base"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone Number"
                    className="h-[60px] border border-gray-200 px-5 w-full focus-visible:ring-0 focus-visible:border-[#4BBFB8] bg-white rounded-none text-base"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Subject"
                    className="h-[60px] border border-gray-200 px-5 w-full focus-visible:ring-0 focus-visible:border-[#4BBFB8] bg-white rounded-none text-base"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  placeholder="Write a Message"
                  rows={6}
                  className="border border-gray-200 p-5 w-full resize-none focus:outline-none focus:border-[#4BBFB8] bg-white rounded-none text-base transition-colors"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#4BBFB8] hover:bg-[#4BBFB8]/90 text-white rounded-none h-[60px] px-12 font-bold tracking-[0.15em] text-sm uppercase mt-4 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "SENDING..." : "SEND A MESSAGE"}
        </Button>
        {message && (
          <p className={`text-sm font-semibold ${status === "success" ? "text-[#1e2a35]" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </Form>
  );
}
