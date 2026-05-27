const dependcies = new Map();

export function getDependency(name) {
  return dependcies.get(name);
}

export function addDependency(name, dependency) {
  if (dependcies.has(name)) {
    throw new Error(`Dependency with name ${name} already exists.`);
  }
  dependcies.set(name, dependency);

}