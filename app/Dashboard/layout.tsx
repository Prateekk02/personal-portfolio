import { DashboardHeader } from "../components";
import {DashboardFooter} from "../components";
export default function DashboardLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return <>
        <DashboardHeader />
        {children}
        <DashboardFooter />
    </>
}