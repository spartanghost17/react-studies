import { CORE_CONCEPTS, EXAMPLES } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((data, idx) => (
          <CoreConcept key={idx} {...data} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
