export const selectContacts = state => state.contacts;

export const selectFilterValue = state => state.filter;

export const selectIsLoading = state => state.contacts.IsLoading;

export const selectErrorValue = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filterValue = selectFilterValue(state);

  const visibleContacts = contacts.items.filter(item => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(filterValue);
  });

  return visibleContacts;
};
