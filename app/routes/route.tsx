import { useMemo } from 'react';

import {
  ActionFunction,
  Form,
  json,
  Link,
  useActionData,
  useSearchParams,
} from 'remix';

type ActionData = {
  result: string;
};
export const action: ActionFunction = () => {
  return json<ActionData>(
    {
      result: "success",
    },
    200
  );
};

export default function Route() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();

  const redirectTo = useMemo(
    () => searchParams.get("redirectTo"),
    [searchParams]
  );

  console.log(actionData);

  return (
    <>
      <Link to="/">Go home</Link>
      <p>{actionData?.result}</p>
      <Form method="post">
        <input
          type="hidden"
          name="redirectTo"
          value={searchParams.get("redirectTo") || "/"}
        />
        <button>Submit</button>
      </Form>
    </>
  );
}
