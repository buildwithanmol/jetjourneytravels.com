import { logout } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export function Logout() {
    return <Button variant={"link"} onClick={logout}>
        Logout
    </Button>
}   