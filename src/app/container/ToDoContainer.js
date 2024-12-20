import ItemList from "../component/ItemList.jsx";
import { GET_ITEMS, GET_TRANSACTIONS } from "../operations/queries/queries";
import {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,

  ADD_TRANSACTIONS,
  UPDATE_TRANSACTIONS,
  DELETE_TRANSACTIONS,
} from "../operations/mutations/mutations";
import { useQuery, useMutation } from "@apollo/client";

const ToDoContainer = () => {
  const {
    data: queryData = {},
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_ITEMS);
  const {
    data: queryTransactionData = {},
    // error: queryError,
    // loading: queryLoading,
  } = useQuery(GET_TRANSACTIONS);
  console.log(queryTransactionData,'queryTransactionData')
  const { items = [] } = queryData;

  const [
    addItem,
    { error: addMutationError, loading: addMutationLoading },
  ] = useMutation(ADD_ITEM, {
    refetchQueries: [{ query: GET_ITEMS }],
  });

  const [
    editItem,
    { error: editMutationError, loading: editMutationLoading },
  ] = useMutation(UPDATE_ITEM, {
    refetchQueries: [{ query: GET_ITEMS }],
    awaitRefetchQueries: true
  });

  const [
    deleteItem,
    { error: deleteMutationError, loading: deleteMutationLoading },
  ] = useMutation(DELETE_ITEM, {
    refetchQueries: [{ query: GET_ITEMS }],
    awaitRefetchQueries: true
  });

  // if (queryError) return <div>{queryError}</div>;
  // if (addMutationError) return <div>{addMutationError}</div>;
  // if (editMutationError) return <div>{editMutationError}</div>;
  // if (deleteMutationError) return <div>{deleteMutationError}</div>;

  return (
    <ItemList
      items={items}
      // addItem={addItem}
      // editItem={editItem}
      // deleteItem={deleteItem}
      // loading={
      //   queryLoading ||
      //   addMutationLoading ||
      //   editMutationLoading ||
      //   deleteMutationLoading
      // }
    />
  );
};

export default ToDoContainer;