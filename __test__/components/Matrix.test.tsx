import { render } from "@testing-library/react";
import { Matrix } from "@/components";

it("Should match with snapshot <Matrix />", () => {
 const { container } = render(<Matrix />);

 expect(container).toMatchSnapshot();
});
