export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-body min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {children}
    </div>
  )
}
