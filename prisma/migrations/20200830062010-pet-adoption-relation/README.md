# Migration `20200830062010-pet-adoption-relation`

This migration has been generated by Dom Hynes at 8/30/2020, 4:20:10 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE UNIQUE INDEX "Adoption_petId_unique" ON "public"."Adoption"("petId")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200830022054-fix-adoption..20200830062010-pet-adoption-relation
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -31,13 +31,13 @@
   adoptions Adoption[]
 }
 model Pet {
-  id        String     @id @default(cuid())
+  id        String   @id @default(cuid())
   name      String?
-  createdAt DateTime   @default(now())
-  updatedAt DateTime   @updatedAt
-  adoptions Adoption[]
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
+  adoption  Adoption
 }
 model Adoption {
   id        String   @id @default(cuid())
```

