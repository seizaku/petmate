import Link from "next/link";
import React from "react";
import { AppContainer } from "~/components/layouts/app-container";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { AppBottomNav } from "~/components/layouts/app-bottom-nav";
import { FaBell, FaSearch } from "react-icons/fa";

export default function HomePage() {
  return (
    <AppContainer>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback>LZ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-medium">Hello, Landrei</h1>
            <p className="text-muted-foreground text-xs">Good Morning!</p>
          </div>
        </div>
        <Link
          href={""}
          className={buttonVariants({ variant: "outline", size: "icon" })}
        >
          <FaBell />
        </Link>
      </div>

      <div className="relative my-6">
        <Input
          className="pl-10"
          placeholder="Search for services and clinics"
        />
        <FaSearch className="text-muted-foreground absolute left-3.5 top-2 h-5" />
      </div>

      <Card className="border shadow-none">
        <CardHeader>
          <CardTitle>My Appointments</CardTitle>
          <CardDescription>Keep track of your appointments.</CardDescription>
        </CardHeader>
      </Card>
      <AppBottomNav />
    </AppContainer>
  );
}
