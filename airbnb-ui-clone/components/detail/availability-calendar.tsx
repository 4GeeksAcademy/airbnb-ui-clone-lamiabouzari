type AvailabilityCalendarProps = {
  visibleMonth: string;
  selectedCheckIn: string;
  selectedCheckOut: string;
};

export function AvailabilityCalendar({ visibleMonth, selectedCheckIn, selectedCheckOut }: AvailabilityCalendarProps) {
  return (
    <section className="rounded-2xl bg-white p-5 text-sm text-neutral-700">
      Availability calendar placeholder • {visibleMonth} • {selectedCheckIn} to {selectedCheckOut}
    </section>
  );
}
