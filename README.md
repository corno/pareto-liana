# Pareto

A TypeScript library for the Pareto programming language - a functional programming language focused on type safety, immutability, and elegant data transformation.

[![npm version](https://img.shields.io/npm/v/pareto?color=blue&style=flat-square)](https://www.npmjs.com/package/pareto)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](LICENSE)

## Overview

Pareto is a functional programming language that emphasizes type safety, immutability, and powerful data transformation capabilities. It provides a comprehensive foundation for building robust data processing pipelines, code generators, and domain-specific language tools.

## Installation

```bash
npm install pareto
```

## Core Philosophy

Pareto follows the **Pareto Principle** in language design - focusing on the 20% of features that provide 80% of the value:

- **🎯 Type Safety First**: Everything is statically typed with full TypeScript integration
- **🔒 Immutability**: All data structures are immutable by default
- **⚡ Functional Purity**: Pure functions and predictable transformations
- **🏗️ Composability**: Small, reusable components that combine elegantly
- **📊 Data-Oriented**: Designed around transforming and manipulating structured data

## Key Features

### Type System
- **Strong static typing** with full TypeScript integration
- **Algebraic data types** with union types and pattern matching
- **Generic programming** with flexible type parameters
- **Compile-time safety** to catch errors early

### Data Structures
- **Immutable collections**: Lists, dictionaries, and sets
- **Tagged unions**: Type-safe discriminated unions
- **Optional values**: Explicit handling of missing data
- **Result types**: Elegant error handling without exceptions

### Transformations
- **Schema-driven transformations**: Convert between different data formats
- **Code generation**: Generate source code from specifications
- **Data validation**: Robust validation with detailed error reporting
- **Template processing**: Flexible templating system

## Architecture

Pareto is built on several foundational concepts:

### Schemas and Types
Define the structure of your data with precision:

```typescript
import * as pareto from 'pareto'

// Define a schema
const UserSchema = pareto.schema.object({
    'id': pareto.schema.string(),
    'name': pareto.schema.string(),
    'email': pareto.schema.optional(pareto.schema.string()),
    'roles': pareto.schema.array(pareto.schema.string())
})

type User = pareto.TypeOf<typeof UserSchema>
```

### Transformations
Type-safe data transformations:

```typescript
// Transform user data to different format
const transformToDisplay = pareto.transform.create(
    UserSchema,
    DisplaySchema,
    (user) => ({
        'display_name': user.name,
        'contact': user.email.transform(
            (email) => `Email: ${email}`,
            () => 'No contact info'
        ),
        'permissions': user.roles.join(', ')
    })
)
```

### Operations
Functional operations on collections:

```typescript
import * as ops from 'pareto/operations'

// Process collections functionally
const processUsers = (users: User[]) => {
    return ops.list.pipe(users)
        .filter(user => user.roles.includes('admin'))
        .map(user => transformToDisplay(user))
        .sortBy(user => user.display_name)
        .value()
}
```

## Core Modules

### Data Types
- **Primitives**: String, number, boolean, null handling
- **Collections**: Immutable lists, dictionaries, sets
- **Unions**: Tagged unions and pattern matching
- **Options**: Optional value handling

### Transformations
- **Schema transformation**: Convert between different schemas
- **Code generation**: Generate TypeScript, JavaScript, and other languages
- **Serialization**: JSON, ASTN, and custom format support
- **Validation**: Schema-based validation with detailed errors

### Operations
- **List operations**: Map, filter, reduce, sort, group
- **Dictionary operations**: Key-value manipulation and transformation
- **String operations**: Text processing and formatting
- **Validation operations**: Data validation and error collection

## Usage Examples

### Basic Data Processing

```typescript
import * as pareto from 'pareto'

// Define and validate data
const userData = pareto.validate(rawData, UserSchema)

if (userData.success) {
    const processedUsers = pareto.operations.list.map(
        userData.data,
        (user) => ({
            ...user,
            normalized_email: user.email?.toLowerCase()
        })
    )
} else {
    console.error('Validation failed:', userData.errors)
}
```

### Schema Transformation

```typescript
// Define source and target schemas
const APIUserSchema = pareto.schema.object({
    'user_id': pareto.schema.string(),
    'full_name': pareto.schema.string(),
    'email_address': pareto.schema.optional(pareto.schema.string())
})

const DBUserSchema = pareto.schema.object({
    'id': pareto.schema.string(),
    'name': pareto.schema.string(),
    'email': pareto.schema.optional(pareto.schema.string())
})

// Create transformation
const apiToDbTransform = pareto.transform.create(
    APIUserSchema,
    DBUserSchema,
    (apiUser) => ({
        'id': apiUser.user_id,
        'name': apiUser.full_name,
        'email': apiUser.email_address
    })
)
```

### Code Generation

```typescript
import * as codegen from 'pareto/codegen'

// Generate TypeScript interfaces from schemas
const generateInterface = (schema: pareto.Schema, name: string) => {
    return codegen.typescript.interface({
        'name': name,
        'properties': schema.properties,
        'export': true
    })
}

const userInterface = generateInterface(UserSchema, 'User')
// Output: "export interface User { id: string; name: string; ... }"
```

### Error Handling

```typescript
// Pareto uses Result types instead of exceptions
const processUserSafely = (userData: unknown): pareto.Result<ProcessedUser, ValidationError> => {
    return pareto.chain(
        pareto.validate(userData, UserSchema),
        (user) => pareto.chain(
            validateBusinessRules(user),
            (validUser) => pareto.success(transformUser(validUser))
        )
    )
}

// Handle results
const result = processUserSafely(rawData)
result.match(
    (processedUser) => console.log('Success:', processedUser),
    (error) => console.error('Failed:', error.message)
)
```

## Integration with Ecosystem

Pareto works seamlessly with other libraries:

### ASTN Integration
```typescript
import * as astn from 'astn'
import * as pareto from 'pareto'

// Parse ASTN and validate with Pareto schema
const astData = astn.parse(source)
const validatedData = pareto.validate(astData, ConfigSchema)
```

### Fountain Pen Integration
```typescript
import * as fountainPen from 'pareto-fountain-pen'
import * as pareto from 'pareto'

// Generate formatted output
const output = pareto.transform.apply(
    data,
    pareto.transform.toFountainPen(template)
)
```

## Advanced Features

### Pattern Matching
```typescript
// Type-safe pattern matching on tagged unions
const StatusSchema = pareto.schema.union([
    pareto.schema.literal('pending'),
    pareto.schema.literal('completed'),
    pareto.schema.literal('failed')
])

const handleStatus = (status: pareto.TypeOf<typeof StatusSchema>) => {
    return pareto.match(status, {
        'pending': () => 'Processing...',
        'completed': () => 'Done!',
        'failed': () => 'Error occurred'
    })
}
```

### Generic Operations
```typescript
// Create reusable generic transformations
const createMapper = <T, U>(transform: (item: T) => U) => {
    return (items: pareto.List<T>): pareto.List<U> => {
        return pareto.operations.list.map(items, transform)
    }
}

const stringLengthMapper = createMapper((str: string) => str.length)
```

### Custom Validators
```typescript
// Create custom validation logic
const EmailSchema = pareto.schema.string().refine(
    (email) => email.includes('@'),
    { message: 'Must be a valid email address' }
)

const PositiveNumberSchema = pareto.schema.number().refine(
    (num) => num > 0,
    { message: 'Must be positive' }
)
```

## API Reference

### Core Types
- `Schema<T>`: Schema definition for type T
- `Transform<TInput, TOutput>`: Type-safe transformation
- `Result<TSuccess, TError>`: Result type for error handling
- `Optional<T>`: Optional value container
- `List<T>`: Immutable list type
- `Dictionary<T>`: Immutable key-value mapping

### Main Functions
- `pareto.schema.*`: Schema definition functions
- `pareto.validate(data, schema)`: Validate data against schema
- `pareto.transform.*`: Data transformation utilities
- `pareto.operations.*`: Functional operations on collections

## TypeScript Integration

Full TypeScript support with:
- **Type inference**: Automatic type derivation from schemas
- **Compile-time validation**: Catch type errors during development
- **Generic programming**: Flexible, reusable type-safe components
- **Strict null checking**: Explicit handling of optional values

## Performance

Pareto is designed for performance:
- **Lazy evaluation**: Computations only performed when needed
- **Structural sharing**: Efficient immutable data structures
- **Optimized operations**: Fast implementations of common operations
- **Tree shaking**: Only bundle the parts you use

## Contributing

Contributions are welcome! Please:

1. Follow functional programming principles
2. Maintain type safety throughout
3. Include comprehensive tests
4. Update documentation for new features
5. Follow the established code style

## Dependencies

- `astn`: ASTN parsing and formatting
- `exupery`: Core functional programming utilities
- `exupery-core-*`: Core algorithms and data structures
- `pareto-fountain-pen`: Text generation and formatting
- `pareto-standard-operations`: Standard functional operations

## License

Apache 2.0 License - see [LICENSE](LICENSE) file for details.

## Version

Current version: **0.76.66**

---

*The functional programming language for type-safe data transformation*