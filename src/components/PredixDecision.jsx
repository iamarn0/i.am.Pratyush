const signals = [
  ["Pincode", "Destination history"],
  ["Address", "Delivery address quality"],
  ["Order", "Value, weight, and COD"],
  ["Courier", "Available courier performance"],
]

const recommendationFields = ["Courier", "Success probability", "RTO rate", "Score"]

export default function PredixDecision() {
  return (
    <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
      <div>
        <p className="text-xs font-medium tracking-[0.14em] text-[#3d5270]">RTO RISK</p>
        <p className="mt-4 text-2xl font-medium tracking-tight">Risk level</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Low, medium, high, or critical. The score is calculated for that shipment. No example number is shown, so it cannot be read as production data.
        </p>
      </div>
      <div>
        <p className="text-xs font-medium tracking-[0.14em] text-[#3d5270]">WHY</p>
        <ul className="mt-4 space-y-2">
          {signals.map(([name, detail]) => (
            <li key={name} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="font-medium">{name}</span>
              <span className="text-right text-muted">{detail}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted">SHAP records which signals raised or lowered the risk. Directions are not filled in here.</p>
      </div>
      <div>
        <p className="text-xs font-medium tracking-[0.14em] text-[#3d5270]">COURIER RECOMMENDATION</p>
        <ul className="mt-4 space-y-2 text-sm">
          {recommendationFields.map((field) => (
            <li key={field}>{field}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted">Ranked from the couriers available for that shipment.</p>
      </div>
    </div>
  )
}
