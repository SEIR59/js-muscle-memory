const arr = [
  { name: "qewregf dqewafs", count: 2 },
  { name: "survey with select", count: 2 },
  { name: "werasd", count: 1 },
  { name: "werasd", count: 1 },
];

const result = arr.reduce((acc, d) => {
  const found = acc.find((a) => a.name === d.name);
  //const value = { name: d.name, val: d.value };
  const value = { value: d.name, count: d.count }; // the element in data property
  if (!found) {
    //acc.push(...value);
    acc.push({ name: d.name, count: d.count }); // not found, so need to add data property
  } else {
    //acc.push({ name: d.name, data: [{ value: d.value }, { count: d.count }] });
    found.push(value); // if found, that means data property exists, so just push new element to found.data.
  }
  return acc;
}, []);

console.log(result);
