"use client"

import * as React from "react"
import { Plus, Minus } from "lucide-react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-black rounded-[45px] shadow-[0_5px_0_0_#191a23] transition-all duration-300 data-[state=open]:bg-green data-[state=closed]:bg-gray mb-6 last:mb-0",
        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-[45px] px-8 py-8 text-left text-lg font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div>svg.minus]:block [&[data-state=open]>div>svg.plus]:hidden [&[data-state=closed]>div>svg.minus]:hidden [&[data-state=closed]>div>svg.plus]:block",
          className
        )}
        {...props}
      >
        {children}
        <div className="flex items-center justify-center border border-black rounded-full bg-gray w-12 h-12 shrink-0">
          <Plus className="plus size-6 transition-transform duration-200" />
          <Minus className="minus size-6 transition-transform duration-200 hidden" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
      {...props}
    >
      <div className={cn("px-8 pb-8 pt-0", className)}>
        <hr className="border-t border-black mb-8" />
        <div className="text-lg leading-relaxed">{children}</div>
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
