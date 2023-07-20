type DashboardProps = {
    children: React.ReactNode
}

const Dashboard:React.FC<DashboardProps> = ({children}) => {
    return (
        <div className="grid grid-cols-[300px_1fr]">
            {children}
        </div>
    )
}

export default Dashboard