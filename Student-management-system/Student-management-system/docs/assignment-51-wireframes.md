
flowchart TD
    A[Open Student Management System] --> B[Load saved student records]
    B --> C[Display Dashboard]
    C --> D{Choose an action}
    D --> E[Add Student]
    D --> F[Search or Filter]
    D --> G[Edit Student]
    D --> H[Delete Student]
    E --> I[Validate Form]
    I --> J[Save Record]
    G --> K[Update Record]
    H --> L[Confirm Deletion]
    J --> M[Update Local Storage]
    K --> M
    L --> M
    F --> N[Display Matching Records]
    M --> O[Render Updated Dashboard]
