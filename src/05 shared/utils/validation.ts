import { validate } from '@angular/forms/signals';

export function isNonNullable<T>(value: T | null | undefined): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

export function uniqueValueValidator<T>(
    collection: () => readonly T[],
    getValue: (item: T) => string,
    message: string,
) {
    return (path: Parameters<typeof validate>[0]) =>
        validate(path, ({ value }) => {
            const currentValue = value();

            if (!currentValue) {
                return null;
            }

            const isDuplicate = collection().some((item) => getValue(item) === currentValue);

            return isDuplicate
                ? {
                      kind: 'uniqueValue',
                      message,
                  }
                : null;
        });
}
