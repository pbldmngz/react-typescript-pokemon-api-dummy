import "src/components/PokeDetails/PokeProperties/PokeProperties.scss";
import PropertySlot from "src/components/PokeDetails/PokeProperties/PropertySlot";

type Props = { properties: any[]; propertyName: string };

function PokeProperties({ properties, propertyName }: Props) {
  return (
    <div className="property-container">
      {properties.map((property, index) => {
        return (
          <div className="property-row" key={index}>
            <p className="slot">{index + 1}</p>
            <PropertySlot
              {...property[propertyName]}
              key={property[propertyName].name}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PokeProperties;
