import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'isStrongPassword',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    // Password strength validation logic
                    // You can replace this with your own strength checks
                    // For example: Check for minimum length and specific character requirements
                    const isStrong = value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
                    return isStrong;
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must be a strong password`;
                },
            },
        });
    };
}
