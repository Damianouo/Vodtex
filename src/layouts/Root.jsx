import PageTransition from "./PageTransition";
import StableOutlet from "./StableOutlet";
function Root() {
  return (
    <PageTransition>
      <div className="grid min-h-screen p-4">
        <StableOutlet />
      </div>
    </PageTransition>
  );
}

export default Root;
