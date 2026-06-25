type HostCardProps = {
  hostName: string;
  hostSince: string;
  isSuperhost: boolean;
  bio: string;
};

export function HostCard({ hostName, hostSince, isSuperhost, bio }: HostCardProps) {
  return (
    <section className="rounded-2xl bg-white p-5">
      <h2 className="text-lg font-semibold text-neutral-900">Hosted by {hostName}</h2>
      <p className="mt-1 text-sm text-neutral-600">Hosting since {hostSince}</p>
      <p className="mt-1 text-sm text-neutral-700">{isSuperhost ? "Superhost" : "Standard host"}</p>
      <p className="mt-2 text-sm text-neutral-700">{bio}</p>
    </section>
  );
}
