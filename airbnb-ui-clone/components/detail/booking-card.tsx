type BookingCardProps = {
  pricePerNight: number;
  originalPricePerNight?: number;
  rating: number;
  reviewCount: number;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  serviceFee?: number;
  cleaningFee?: number;
  taxes?: number;
  totalPrice: number;
  isAvailable: boolean;
  onDateChange?: (checkInDate: string, checkOutDate: string) => void;
  onGuestChange?: (guestCount: number) => void;
  onReserve?: () => void;
};

export function BookingCard({
  pricePerNight,
  rating,
  reviewCount,
  checkInDate,
  checkOutDate,
  guestCount,
  totalPrice,
  isAvailable,
}: BookingCardProps) {
  return (
    <aside className="rounded-2xl border border-neutral-200 bg-white p-5">
      <p className="text-lg font-semibold text-neutral-900">${pricePerNight}/night</p>
      <p className="text-sm text-neutral-600">{rating} ({reviewCount} reviews)</p>
      <p className="mt-2 text-sm text-neutral-700">{checkInDate} to {checkOutDate} • {guestCount} guests</p>
      <p className="mt-2 text-sm font-medium text-neutral-900">Total: ${totalPrice}</p>
      <p className="mt-2 text-xs text-neutral-600">{isAvailable ? "Available" : "Unavailable"}</p>
    </aside>
  );
}
