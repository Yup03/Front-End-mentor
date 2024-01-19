import AddOnsCard from "./AddOnsCard"

const AddOns = ({ addOns, checked, setChosenAdds, chosenAdds }) => {
  return (
    <div className="wr">
      <div className="box">
        <h4>Pick add-ons</h4>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="card-box">
          {addOns.map(a => (
            <AddOnsCard
              addOn={a}
              checked={checked}
              setChosenAdds={setChosenAdds}
              chosenAdds={chosenAdds}
              key={a.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddOns
