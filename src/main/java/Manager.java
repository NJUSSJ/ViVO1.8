import java.util.ArrayList;
import java.util.List;

public class Manager extends Worker {

	private List<Worker> worker;

	public Manager() {

	}
	//Manager类的初始化
	public Manager(String name, int age, int salary, String department) {
		super(name, age, salary, department);
		this.worker = new ArrayList<Worker>();
	}

	// 管理人员可以查询本部门员工的基本信息，跨部门查询提示权限不足，提示“Access Denied!”
	public String inquire(Worker e) {

		if (e.getDepartment().equals(this.department)) {
			StringBuilder stringBuilder = new StringBuilder();
			stringBuilder.append("My name is ")
					.append(e.getName())
					.append(" ; age : ")
					.append(e.getAge());

			if (e.getDepartment().equals("Programmer")) {
				Programmer programmer = (Programmer)e;
				stringBuilder.append(" ; language : ")
						.append(programmer.getLanguage());
			}

			stringBuilder.append(" ; salary : ")
					.append(e.getSalary());
			stringBuilder.append(".");

			return stringBuilder.toString();

		} else {
			// 若员工跨部门，提示权限不足
			throw new IllegalArgumentException("Access denied!");
		}
	}

	// 管理人员给自己的队伍添加工作人员，同一部门的工作人员可以添加，并返回true，不同部门的工作人员无法添加，返回false
	public boolean lead(Worker e) {

		if (e.getDepartment().equals(this.department)) {
			this.worker.add(e);
			return true;
		} else {
			return false;
		}
	}

	// 打印自己队伍的人员姓名，没有打印“Empty”
	public String print() {
		StringBuilder stringBuilder = new StringBuilder();

		if (this.worker.size() >= 1) {
			stringBuilder.append("Statement for ")
					.append(this.name);

			for (Worker worker: this.worker) {
				stringBuilder.append("\n - ")
						.append(worker.getName());
			}
		}
		else {
			stringBuilder.append("Empty");
		}

		return stringBuilder.toString();
	}

}
