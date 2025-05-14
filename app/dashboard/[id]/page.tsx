export default async function DashboardDetailPage({
    params, searchParams
}) {
    console.log(params)
    const { id } = await params
    const { chu } = await searchParams
    return <main>Dashboard Detail Page {id}, chu = {chu}</main>
}
