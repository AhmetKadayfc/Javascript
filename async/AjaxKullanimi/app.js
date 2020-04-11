document.getElementById('ajax').addEventListener('click', getAllEmployees);

function getAllEmployees() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'employees.json', true);
	xhr.onload = function() {
		let list = document.getElementById('employees');
		if (this.status == 200) {
			const employees = JSON.parse(this.responseText);
			console.log(employees);
			employees.forEach((employee) => {
				list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.title}</td>
                    <td>${employee.age}</td>
                    </tr>
                `;
			});
		}
	};

	xhr.send();
}
