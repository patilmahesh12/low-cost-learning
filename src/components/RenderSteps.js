function RenderSteps({ steps }) {
    return (
        <div>
            {steps.map((step, index) => (
                <div key={step.id || `step-${index}`}>
                    {/* ...existing code to render each step... */}
                </div>
            ))}
        </div>
    );
}
