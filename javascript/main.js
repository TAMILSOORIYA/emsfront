function printDetails(event) {
  event.preventDefault();
  let employeeId = document.getElementById("Id").value;
  let employeeName = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let position = document.getElementById("Position").value;
  let salary = document.getElementById("Salary").value;
  let gender = document.querySelector('input[name="Gender"]:checked')?.value;
  let date = document.getElementById("Date").value;

  console.log("EmplyoeeId:" + employeeId);
  console.log("Name:" + employeeName);
  console.log("Email:" + email);
  console.log("Position:" + position);
  console.log("Salary:" + salary);
  console.log("Gender:" + gender);
  console.log("Date:" + date);
  document.getElementById("demo").innerHTML = employeeId+","+employeeName+","+email+","+position+","+salary+","+gender+","+date;
  return true;
}
