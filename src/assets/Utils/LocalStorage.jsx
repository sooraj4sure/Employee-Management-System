// localStorage.clear();

const employees = [
  {
    "id": 1,
    "email": "a@a.a",
    "password": "123",
    "firstName": "Rajesh",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare Monthly Report",
        "description": "Compile and summarize the financial data for the monthly review.",
        "date": "2024-12-07",
        "category": "Finance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Participate in the weekly team sync-up.",
        "date": "2024-12-09",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "System Upgrade",
        "description": "Oversee the software update process for the accounting system.",
        "date": "2024-12-10",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Priya",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Customer Follow-Up",
        "description": "Contact clients for feedback on the recent campaign.",
        "date": "2024-12-08",
        "category": "Customer Relations",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Audit the warehouse for any discrepancies.",
        "date": "2024-12-06",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Arjun",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Code Review",
        "description": "Review the latest pull requests from the development team.",
        "date": "2024-12-07",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Project Presentation",
        "description": "Prepare slides for the upcoming stakeholder meeting.",
        "date": "2024-12-09",
        "category": "Management",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Meena",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Marketing Plan",
        "description": "Develop a strategy for the new product launch.",
        "date": "2024-12-10",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Email Campaign",
        "description": "Launch the year-end promotional emails.",
        "date": "2024-12-06",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Ananya",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Perform a vulnerability assessment of the network.",
        "date": "2024-12-07",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Backup Validation",
        "description": "Check the integrity of last month's backups.",
        "date": "2024-12-06",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
    "firstName": "Kiran"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return{employees,admin}
};


