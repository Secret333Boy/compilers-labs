.assembly extern mscorlib {
  .publickeytoken = (B7 7A 5C 56 19 34 E0 89)
  .ver 4:0:0:0
}

.assembly program {}
.module program.exe
.class public auto ansi Program extends [mscorlib]System.Object {
  .method public hidebysig static void Main() cil managed {
    .entrypoint
    .locals init (
  int32 a,
  int32 b,
  int32 c,
  int32 d,
  float32 e,
  int32 readNum,
  float32 f,
  int32 i,
  int32 l
)
// Package: com.example.lab
ldc.i4 1
stloc a
ldc.i4 2
stloc b
ldloc a
ldloc b
add
stloc c
ldc.i4 3
stloc d
ldloc d
ldloc a
mul
stloc d
ldc.r4 .2
stloc e
ldloc e
ldc.i4 2
conv.r4
div
ldc.i4 1
conv.r4
sub
stloc e
call string [mscorlib]System.Console::ReadLine()
call int32 [mscorlib]System.Convert::ToInt32(string)
stloc readNum
ldc.i4 -1
conv.r4
ldloc e
ldloc a
ldloc c
call float64 [mscorlib]System.Math::Pow(float64, float64)
conv.r4
mul
add
ldloc b
conv.r4
ldc.r4 1.2
ldloc a
ldloc readNum
ldc.i4 1
sub
mul
conv.r4
add
mul
add
stloc f
ldc.i4 0
stloc i
ldc.i4 2
stloc l
label_0:
ldloc i
ldc.i4 3
clt
brfalse label_1
ldloc l
ldc.i4 410
cgt
brfalse label_2
ldloc l
ldc.i4 2
div
stloc l
br label_3
label_2:
ldloc l
ldc.i4 0
cgt
ldc.i4.0
ceq
brfalse label_4
ldloc l
ldc.i4 1
add
stloc l
br label_5
label_4:
ldloc l
ldc.i4 20
clt
ldc.i4.0
ceq
brfalse label_6
ldloc l
ldc.i4 12
add
stloc l
br label_7
label_6:
ldloc l
ldc.i4 2
mul
stloc l
label_7:
label_5:
label_3:
ldloc i
ldc.i4 1
ceq
brfalse label_8
ldc.i4 0
ldc.i4 0
ceq
brfalse label_10
ldstr "Output: "
call void [mscorlib]System.Console::Write(string)
ldc.i4 1
call void [mscorlib]System.Console::WriteLine(int32)
br label_11
label_10:
label_11:
br label_9
label_8:
label_9:
ldloc i
ldc.i4 2
ceq
brfalse label_12
br label_13
label_12:
ldloc i
ldc.i4 1
ceq
ldc.i4.0
ceq
brfalse label_14
ldstr "Output: "
call void [mscorlib]System.Console::Write(string)
ldloc f
ldloc i
conv.r4
add
call void [mscorlib]System.Console::WriteLine(float32)
br label_15
label_14:
label_15:
label_13:
ldloc i
ldc.i4 1
add
stloc i
br label_0
label_1:
ret
  }
}