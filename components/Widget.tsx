import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface WidgetProps {
    title: string;
    children: React.ReactNode;
}

export function Widget({ title, children }: WidgetProps){
    return (
        <Card className="h-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}