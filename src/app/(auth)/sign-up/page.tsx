import React from "react";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button, buttonVariants } from "~/components/ui/button";
import { AppContainer } from "~/components/layouts/app-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <AppContainer>
      <div className="flex h-full w-full flex-col justify-center">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="w-44 text-3xl">Sign Up</CardTitle>
            <CardDescription>Lorem Ipsum sit amet </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">First Name</Label>
                  <Input placeholder="Your first name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Last Name</Label>
                  <Input placeholder="Your last name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input placeholder="Your email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input placeholder="Your password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              <Button className="w-full">Sign Up</Button>
              <div className="relative my-6">
                <span className="text-muted-foreground bg-background absolute inset-x-0 -top-2 mx-auto w-fit px-2 text-center text-xs">
                  OR
                </span>
                <Separator />
              </div>
              <Link
                href={"/sign-in"}
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full",
                })}
              >
                Sign In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </AppContainer>
  );
}
