import { ChatList } from "@/pages/auth/chat"

export function Home() {
  const onSubmit = async () => {}

  return (
    <div className="container flex h-full w-full flex-col items-center justify-center border p-2">
      <ChatList />
    </div>
    // <div className="container flex h-full items-center justify-center gap-2 p-2">
    // <Card className="flex h-full w-full max-w-2xl flex-col">
    //   <CardHeader className="border-b">
    //     <div className="flex flex-row items-center gap-2">
    //       <Avatar>
    //         <AvatarImage src="https://github.com/shadcn.png" />
    //         <AvatarFallback>CN</AvatarFallback>
    //       </Avatar>
    //       <div className="flex flex-col">
    //         <CardTitle>shadcn</CardTitle>
    //         <CardDescription>
    //           <p className="text-muted-foreground text-xs font-thin">
    //             typing...
    //           </p>
    //         </CardDescription>
    //       </div>
    //     </div>
    //   </CardHeader>
    //   <CardContent className="overflow-hidden p-1">
    //     <ScrollArea className="h-full w-full rounded-xl px-3">
    //       <ul className="flex flex-col gap-6 rounded-2xl">
    //         <li className="mr-16 flex items-end gap-2 self-start rounded-xl rounded-bl-none">
    //           <Avatar size="sm" className="mb-2">
    //             <AvatarImage src="https://github.com/shadcn.png" />
    //             <AvatarFallback>CN</AvatarFallback>
    //           </Avatar>
    //           <div>
    //             <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //               <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //                 <p className="text-muted-foreground text-sm font-extrabold">
    //                   shadcn
    //                 </p>
    //               </div>
    //               <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //                 Hello!
    //               </p>
    //             </div>
    //             <p className="text-muted-foreground px-1 py-1 text-xs font-thin">
    //               12:34 PM
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 flex flex-row-reverse items-end gap-2 self-end rounded-xl rounded-br-none">
    //           <Avatar size="sm" className="mb-2">
    //             <AvatarImage src="https://github.com/deolivtiago.png" />
    //             <AvatarFallback>TO</AvatarFallback>
    //           </Avatar>
    //           <div className="flex flex-col items-end">
    //             <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //               <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //                 <p className="text-muted-foreground text-sm font-extrabold">
    //                   deolivtiago
    //                 </p>
    //               </div>
    //               <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //                 Hello! How are you?
    //               </p>
    //             </div>
    //             <p className="text-muted-foreground px-1 py-1 text-xs font-thin">
    //               13:46 PM
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 flex flex-row-reverse items-end gap-2 self-end rounded-xl rounded-br-none">
    //           <Avatar size="sm" className="mb-2">
    //             <AvatarImage src="https://github.com/deolivtiago.png" />
    //             <AvatarFallback>TO</AvatarFallback>
    //           </Avatar>
    //           <div className="flex flex-col items-end">
    //             <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //               <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //                 <p className="text-muted-foreground text-sm font-extrabold">
    //                   deolivtiago
    //                 </p>
    //               </div>
    //               <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //                 Tenetur soluta pariatur fugit repellendus aspernatur
    //                 voluptas praesentium cupiditate atque deleniti placeat
    //                 possimus, vitae facilis tempora magni voluptate aliquid
    //                 odit nulla ex!
    //               </p>
    //             </div>
    //             <p className="text-muted-foreground px-1 py-1 text-xs font-thin">
    //               13:49 PM
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
    //               sunt nam, odio tenetur reiciendis magni, asperiores voluptas
    //               est vero nihil minima! Quisquam iusto optio alias
    //               reprehenderit sequi cum laboriosam temporibus!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Tenetur soluta nulla ex!
    //             </p>
    //           </div>
    //         </li>

    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               ya!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Hello!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Hello! How are you?
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //               Tenetur soluta pariatur fugit repellendus aspernatur
    //               voluptas praesentium cupiditate atque deleniti placeat
    //               possimus, vitae facilis tempora magni voluptate aliquid odit
    //               nulla ex!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
    //               sunt nam, odio tenetur reiciendis magni, asperiores voluptas
    //               est vero nihil minima! Quisquam iusto optio alias
    //               reprehenderit sequi cum laboriosam temporibus!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Tenetur soluta nulla ex!
    //             </p>
    //           </div>
    //         </li>

    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               ya!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Hello!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Hello! How are you?
    //             </p>
    //           </div>
    //         </li>
    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    //               Tenetur soluta pariatur fugit repellendus aspernatur
    //               voluptas praesentium cupiditate atque deleniti placeat
    //               possimus, vitae facilis tempora magni voluptate aliquid odit
    //               nulla ex!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
    //               sunt nam, odio tenetur reiciendis magni, asperiores voluptas
    //               est vero nihil minima! Quisquam iusto optio alias
    //               reprehenderit sequi cum laboriosam temporibus!
    //             </p>
    //           </div>
    //         </li>
    //         <li className="mr-16 self-start rounded-xl rounded-bl-none">
    //           <div className="bg-sidebar-accent rounded-xl rounded-bl-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/shadcn.png" />
    //                 <AvatarFallback>CN</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 shadcn
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               Tenetur soluta nulla ex!
    //             </p>
    //           </div>
    //         </li>

    //         <li className="ml-16 self-end rounded-xl rounded-br-none border">
    //           <div className="bg-sidebar-accent rounded-xl rounded-br-none p-2">
    //             <div className="flex items-center justify-start gap-3 rounded-t-xl p-2 pb-1">
    //               <Avatar size="sm">
    //                 <AvatarImage src="https://github.com/deolivtiago.png" />
    //                 <AvatarFallback>TO</AvatarFallback>
    //               </Avatar>
    //               <p className="text-muted-foreground text-sm font-extrabold">
    //                 deolivtiago
    //               </p>
    //             </div>
    //             <p className="rounded-b-xl p-2 leading-relaxed font-extralight">
    //               ya!
    //             </p>
    //           </div>
    //         </li>
    //       </ul>
    //     </ScrollArea>
    //   </CardContent>
    //   <CardFooter className="pt-6">
    //     <Field>
    //       <FieldLabel className="sr-only" htmlFor="input-button-group">
    //         Message
    //       </FieldLabel>
    //       <ButtonGroup>
    //         <Input
    //           id="input-button-group"
    //           placeholder="type a message to send..."
    //         />

    //         <Button variant="outline" size="icon" onClick={onSubmit}>
    //           <SendHorizontal data-icon="inline-end" />
    //         </Button>
    //       </ButtonGroup>
    //     </Field>
    //   </CardFooter>
    // </Card>
    // </div>
  )
}
