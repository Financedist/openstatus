import { MaintenanceForm } from "@/components/forms/maintenance/form";
import { api } from "@/trpc/server";

export default async function MaintenancePage({
  params,
}: {
  params: { workspaceSlug: string; id: string; maintenanceId: string };
}) {
  const monitors = await api.monitor.getMonitorsByPageId.query({
    id: Number(params.id),
  });
  const maintenance = await api.maintenance.getById.query({
    id: Number(params.maintenanceId),
  });

  return (
    <MaintenanceForm
      defaultValues={maintenance}
      pageId={Number(params.id)}
      defaultSection="connect"
      monitors={monitors}
    />
  );
}
