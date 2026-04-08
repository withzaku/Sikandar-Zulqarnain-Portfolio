export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <div className="relative flex flex-col items-center justify-center space-y-6">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
                    <div className="absolute inset-0 rounded-full border-r-2 border-accent animate-[spin_1.5s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-2 rounded-full border-t-2 border-primary/50 animate-[spin_2s_linear_infinite]"></div>
                </div>
                <div className="text-xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-pulse">
                    Initializing
                </div>
                <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-[progress_2s_ease-in-out_infinite]"></div>
                </div>
            </div>
        </div>
    );
}
