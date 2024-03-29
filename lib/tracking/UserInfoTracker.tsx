"use client";
import { useMe } from "@/lib/auth/user";
import { ymUserParams } from "@/lib/tracking/YandexMetrika";
import { useEffect } from "react";

export default function UserInfoTracker({ children }: React.PropsWithChildren) {
  const { me } = useMe();

  // Send user info to Yandex Metrika
  useEffect(() => {
    if (me) {
      ymUserParams({
        UserID: me.id,
        email: me.innopolis_sso?.email,
        name: me.innopolis_sso?.name,
      });
    }
  }, [me]);

  return <>{children}</>;
}
