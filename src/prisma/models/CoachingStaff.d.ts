import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CoachingStaff
 *
 */
export type CoachingStaffModel = runtime.Types.Result.DefaultSelection<Prisma.$CoachingStaffPayload>;
export type AggregateCoachingStaff = {
    _count: CoachingStaffCountAggregateOutputType | null;
    _min: CoachingStaffMinAggregateOutputType | null;
    _max: CoachingStaffMaxAggregateOutputType | null;
};
export type CoachingStaffMinAggregateOutputType = {
    id: string | null;
    staffId: string | null;
    coachingId: string | null;
    role: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CoachingStaffMaxAggregateOutputType = {
    id: string | null;
    staffId: string | null;
    coachingId: string | null;
    role: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CoachingStaffCountAggregateOutputType = {
    id: number;
    staffId: number;
    coachingId: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CoachingStaffMinAggregateInputType = {
    id?: true;
    staffId?: true;
    coachingId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CoachingStaffMaxAggregateInputType = {
    id?: true;
    staffId?: true;
    coachingId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CoachingStaffCountAggregateInputType = {
    id?: true;
    staffId?: true;
    coachingId?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CoachingStaffAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingStaff to aggregate.
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoachingStaffs to fetch.
     */
    orderBy?: Prisma.CoachingStaffOrderByWithRelationInput | Prisma.CoachingStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CoachingStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoachingStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoachingStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CoachingStaffs
    **/
    _count?: true | CoachingStaffCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CoachingStaffMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CoachingStaffMaxAggregateInputType;
};
export type GetCoachingStaffAggregateType<T extends CoachingStaffAggregateArgs> = {
    [P in keyof T & keyof AggregateCoachingStaff]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoachingStaff[P]> : Prisma.GetScalarType<T[P], AggregateCoachingStaff[P]>;
};
export type CoachingStaffGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CoachingStaffWhereInput;
    orderBy?: Prisma.CoachingStaffOrderByWithAggregationInput | Prisma.CoachingStaffOrderByWithAggregationInput[];
    by: Prisma.CoachingStaffScalarFieldEnum[] | Prisma.CoachingStaffScalarFieldEnum;
    having?: Prisma.CoachingStaffScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CoachingStaffCountAggregateInputType | true;
    _min?: CoachingStaffMinAggregateInputType;
    _max?: CoachingStaffMaxAggregateInputType;
};
export type CoachingStaffGroupByOutputType = {
    id: string;
    staffId: string;
    coachingId: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CoachingStaffCountAggregateOutputType | null;
    _min: CoachingStaffMinAggregateOutputType | null;
    _max: CoachingStaffMaxAggregateOutputType | null;
};
export type GetCoachingStaffGroupByPayload<T extends CoachingStaffGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CoachingStaffGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CoachingStaffGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CoachingStaffGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CoachingStaffGroupByOutputType[P]>;
}>>;
export type CoachingStaffWhereInput = {
    AND?: Prisma.CoachingStaffWhereInput | Prisma.CoachingStaffWhereInput[];
    OR?: Prisma.CoachingStaffWhereInput[];
    NOT?: Prisma.CoachingStaffWhereInput | Prisma.CoachingStaffWhereInput[];
    id?: Prisma.StringFilter<"CoachingStaff"> | string;
    staffId?: Prisma.StringFilter<"CoachingStaff"> | string;
    coachingId?: Prisma.StringFilter<"CoachingStaff"> | string;
    role?: Prisma.StringFilter<"CoachingStaff"> | string;
    createdAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    coaching?: Prisma.XOR<Prisma.CoachingCenterScalarRelationFilter, Prisma.CoachingCenterWhereInput>;
};
export type CoachingStaffOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    coachingId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    coaching?: Prisma.CoachingCenterOrderByWithRelationInput;
};
export type CoachingStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CoachingStaffWhereInput | Prisma.CoachingStaffWhereInput[];
    OR?: Prisma.CoachingStaffWhereInput[];
    NOT?: Prisma.CoachingStaffWhereInput | Prisma.CoachingStaffWhereInput[];
    staffId?: Prisma.StringFilter<"CoachingStaff"> | string;
    coachingId?: Prisma.StringFilter<"CoachingStaff"> | string;
    role?: Prisma.StringFilter<"CoachingStaff"> | string;
    createdAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    coaching?: Prisma.XOR<Prisma.CoachingCenterScalarRelationFilter, Prisma.CoachingCenterWhereInput>;
}, "id">;
export type CoachingStaffOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    coachingId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CoachingStaffCountOrderByAggregateInput;
    _max?: Prisma.CoachingStaffMaxOrderByAggregateInput;
    _min?: Prisma.CoachingStaffMinOrderByAggregateInput;
};
export type CoachingStaffScalarWhereWithAggregatesInput = {
    AND?: Prisma.CoachingStaffScalarWhereWithAggregatesInput | Prisma.CoachingStaffScalarWhereWithAggregatesInput[];
    OR?: Prisma.CoachingStaffScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CoachingStaffScalarWhereWithAggregatesInput | Prisma.CoachingStaffScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CoachingStaff"> | string;
    staffId?: Prisma.StringWithAggregatesFilter<"CoachingStaff"> | string;
    coachingId?: Prisma.StringWithAggregatesFilter<"CoachingStaff"> | string;
    role?: Prisma.StringWithAggregatesFilter<"CoachingStaff"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CoachingStaff"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CoachingStaff"> | Date | string;
};
export type CoachingStaffCreateInput = {
    id?: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCoachingStaffsInput;
    coaching: Prisma.CoachingCenterCreateNestedOneWithoutCoachingStaffsInput;
};
export type CoachingStaffUncheckedCreateInput = {
    id?: string;
    staffId: string;
    coachingId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCoachingStaffsNestedInput;
    coaching?: Prisma.CoachingCenterUpdateOneRequiredWithoutCoachingStaffsNestedInput;
};
export type CoachingStaffUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    coachingId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffCreateManyInput = {
    id?: string;
    staffId: string;
    coachingId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    coachingId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffListRelationFilter = {
    every?: Prisma.CoachingStaffWhereInput;
    some?: Prisma.CoachingStaffWhereInput;
    none?: Prisma.CoachingStaffWhereInput;
};
export type CoachingStaffOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CoachingStaffCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    coachingId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoachingStaffMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    coachingId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoachingStaffMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    staffId?: Prisma.SortOrder;
    coachingId?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CoachingStaffCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput> | Prisma.CoachingStaffCreateWithoutUserInput[] | Prisma.CoachingStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutUserInput | Prisma.CoachingStaffCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CoachingStaffCreateManyUserInputEnvelope;
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
};
export type CoachingStaffUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput> | Prisma.CoachingStaffCreateWithoutUserInput[] | Prisma.CoachingStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutUserInput | Prisma.CoachingStaffCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CoachingStaffCreateManyUserInputEnvelope;
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
};
export type CoachingStaffUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput> | Prisma.CoachingStaffCreateWithoutUserInput[] | Prisma.CoachingStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutUserInput | Prisma.CoachingStaffCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CoachingStaffUpsertWithWhereUniqueWithoutUserInput | Prisma.CoachingStaffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CoachingStaffCreateManyUserInputEnvelope;
    set?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    disconnect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    delete?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    update?: Prisma.CoachingStaffUpdateWithWhereUniqueWithoutUserInput | Prisma.CoachingStaffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CoachingStaffUpdateManyWithWhereWithoutUserInput | Prisma.CoachingStaffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
};
export type CoachingStaffUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput> | Prisma.CoachingStaffCreateWithoutUserInput[] | Prisma.CoachingStaffUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutUserInput | Prisma.CoachingStaffCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CoachingStaffUpsertWithWhereUniqueWithoutUserInput | Prisma.CoachingStaffUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CoachingStaffCreateManyUserInputEnvelope;
    set?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    disconnect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    delete?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    update?: Prisma.CoachingStaffUpdateWithWhereUniqueWithoutUserInput | Prisma.CoachingStaffUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CoachingStaffUpdateManyWithWhereWithoutUserInput | Prisma.CoachingStaffUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
};
export type CoachingStaffCreateNestedManyWithoutCoachingInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput> | Prisma.CoachingStaffCreateWithoutCoachingInput[] | Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput | Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput[];
    createMany?: Prisma.CoachingStaffCreateManyCoachingInputEnvelope;
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
};
export type CoachingStaffUncheckedCreateNestedManyWithoutCoachingInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput> | Prisma.CoachingStaffCreateWithoutCoachingInput[] | Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput | Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput[];
    createMany?: Prisma.CoachingStaffCreateManyCoachingInputEnvelope;
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
};
export type CoachingStaffUpdateManyWithoutCoachingNestedInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput> | Prisma.CoachingStaffCreateWithoutCoachingInput[] | Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput | Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput[];
    upsert?: Prisma.CoachingStaffUpsertWithWhereUniqueWithoutCoachingInput | Prisma.CoachingStaffUpsertWithWhereUniqueWithoutCoachingInput[];
    createMany?: Prisma.CoachingStaffCreateManyCoachingInputEnvelope;
    set?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    disconnect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    delete?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    update?: Prisma.CoachingStaffUpdateWithWhereUniqueWithoutCoachingInput | Prisma.CoachingStaffUpdateWithWhereUniqueWithoutCoachingInput[];
    updateMany?: Prisma.CoachingStaffUpdateManyWithWhereWithoutCoachingInput | Prisma.CoachingStaffUpdateManyWithWhereWithoutCoachingInput[];
    deleteMany?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
};
export type CoachingStaffUncheckedUpdateManyWithoutCoachingNestedInput = {
    create?: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput> | Prisma.CoachingStaffCreateWithoutCoachingInput[] | Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput[];
    connectOrCreate?: Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput | Prisma.CoachingStaffCreateOrConnectWithoutCoachingInput[];
    upsert?: Prisma.CoachingStaffUpsertWithWhereUniqueWithoutCoachingInput | Prisma.CoachingStaffUpsertWithWhereUniqueWithoutCoachingInput[];
    createMany?: Prisma.CoachingStaffCreateManyCoachingInputEnvelope;
    set?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    disconnect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    delete?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    connect?: Prisma.CoachingStaffWhereUniqueInput | Prisma.CoachingStaffWhereUniqueInput[];
    update?: Prisma.CoachingStaffUpdateWithWhereUniqueWithoutCoachingInput | Prisma.CoachingStaffUpdateWithWhereUniqueWithoutCoachingInput[];
    updateMany?: Prisma.CoachingStaffUpdateManyWithWhereWithoutCoachingInput | Prisma.CoachingStaffUpdateManyWithWhereWithoutCoachingInput[];
    deleteMany?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
};
export type CoachingStaffCreateWithoutUserInput = {
    id?: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    coaching: Prisma.CoachingCenterCreateNestedOneWithoutCoachingStaffsInput;
};
export type CoachingStaffUncheckedCreateWithoutUserInput = {
    id?: string;
    coachingId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffCreateOrConnectWithoutUserInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput>;
};
export type CoachingStaffCreateManyUserInputEnvelope = {
    data: Prisma.CoachingStaffCreateManyUserInput | Prisma.CoachingStaffCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CoachingStaffUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    update: Prisma.XOR<Prisma.CoachingStaffUpdateWithoutUserInput, Prisma.CoachingStaffUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CoachingStaffCreateWithoutUserInput, Prisma.CoachingStaffUncheckedCreateWithoutUserInput>;
};
export type CoachingStaffUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    data: Prisma.XOR<Prisma.CoachingStaffUpdateWithoutUserInput, Prisma.CoachingStaffUncheckedUpdateWithoutUserInput>;
};
export type CoachingStaffUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CoachingStaffScalarWhereInput;
    data: Prisma.XOR<Prisma.CoachingStaffUpdateManyMutationInput, Prisma.CoachingStaffUncheckedUpdateManyWithoutUserInput>;
};
export type CoachingStaffScalarWhereInput = {
    AND?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
    OR?: Prisma.CoachingStaffScalarWhereInput[];
    NOT?: Prisma.CoachingStaffScalarWhereInput | Prisma.CoachingStaffScalarWhereInput[];
    id?: Prisma.StringFilter<"CoachingStaff"> | string;
    staffId?: Prisma.StringFilter<"CoachingStaff"> | string;
    coachingId?: Prisma.StringFilter<"CoachingStaff"> | string;
    role?: Prisma.StringFilter<"CoachingStaff"> | string;
    createdAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CoachingStaff"> | Date | string;
};
export type CoachingStaffCreateWithoutCoachingInput = {
    id?: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCoachingStaffsInput;
};
export type CoachingStaffUncheckedCreateWithoutCoachingInput = {
    id?: string;
    staffId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffCreateOrConnectWithoutCoachingInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    create: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput>;
};
export type CoachingStaffCreateManyCoachingInputEnvelope = {
    data: Prisma.CoachingStaffCreateManyCoachingInput | Prisma.CoachingStaffCreateManyCoachingInput[];
    skipDuplicates?: boolean;
};
export type CoachingStaffUpsertWithWhereUniqueWithoutCoachingInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    update: Prisma.XOR<Prisma.CoachingStaffUpdateWithoutCoachingInput, Prisma.CoachingStaffUncheckedUpdateWithoutCoachingInput>;
    create: Prisma.XOR<Prisma.CoachingStaffCreateWithoutCoachingInput, Prisma.CoachingStaffUncheckedCreateWithoutCoachingInput>;
};
export type CoachingStaffUpdateWithWhereUniqueWithoutCoachingInput = {
    where: Prisma.CoachingStaffWhereUniqueInput;
    data: Prisma.XOR<Prisma.CoachingStaffUpdateWithoutCoachingInput, Prisma.CoachingStaffUncheckedUpdateWithoutCoachingInput>;
};
export type CoachingStaffUpdateManyWithWhereWithoutCoachingInput = {
    where: Prisma.CoachingStaffScalarWhereInput;
    data: Prisma.XOR<Prisma.CoachingStaffUpdateManyMutationInput, Prisma.CoachingStaffUncheckedUpdateManyWithoutCoachingInput>;
};
export type CoachingStaffCreateManyUserInput = {
    id?: string;
    coachingId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    coaching?: Prisma.CoachingCenterUpdateOneRequiredWithoutCoachingStaffsNestedInput;
};
export type CoachingStaffUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coachingId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    coachingId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffCreateManyCoachingInput = {
    id?: string;
    staffId: string;
    role?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CoachingStaffUpdateWithoutCoachingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCoachingStaffsNestedInput;
};
export type CoachingStaffUncheckedUpdateWithoutCoachingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffUncheckedUpdateManyWithoutCoachingInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    staffId?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CoachingStaffSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    coachingId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coachingStaff"]>;
export type CoachingStaffSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    coachingId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coachingStaff"]>;
export type CoachingStaffSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    staffId?: boolean;
    coachingId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coachingStaff"]>;
export type CoachingStaffSelectScalar = {
    id?: boolean;
    staffId?: boolean;
    coachingId?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CoachingStaffOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "staffId" | "coachingId" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["coachingStaff"]>;
export type CoachingStaffInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
};
export type CoachingStaffIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
};
export type CoachingStaffIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    coaching?: boolean | Prisma.CoachingCenterDefaultArgs<ExtArgs>;
};
export type $CoachingStaffPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CoachingStaff";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        coaching: Prisma.$CoachingCenterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        staffId: string;
        coachingId: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["coachingStaff"]>;
    composites: {};
};
export type CoachingStaffGetPayload<S extends boolean | null | undefined | CoachingStaffDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload, S>;
export type CoachingStaffCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CoachingStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CoachingStaffCountAggregateInputType | true;
};
export interface CoachingStaffDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CoachingStaff'];
        meta: {
            name: 'CoachingStaff';
        };
    };
    /**
     * Find zero or one CoachingStaff that matches the filter.
     * @param {CoachingStaffFindUniqueArgs} args - Arguments to find a CoachingStaff
     * @example
     * // Get one CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingStaffFindUniqueArgs>(args: Prisma.SelectSubset<T, CoachingStaffFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CoachingStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachingStaffFindUniqueOrThrowArgs} args - Arguments to find a CoachingStaff
     * @example
     * // Get one CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingStaffFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CoachingStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CoachingStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffFindFirstArgs} args - Arguments to find a CoachingStaff
     * @example
     * // Get one CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingStaffFindFirstArgs>(args?: Prisma.SelectSubset<T, CoachingStaffFindFirstArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CoachingStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffFindFirstOrThrowArgs} args - Arguments to find a CoachingStaff
     * @example
     * // Get one CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingStaffFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CoachingStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CoachingStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingStaffs
     * const coachingStaffs = await prisma.coachingStaff.findMany()
     *
     * // Get first 10 CoachingStaffs
     * const coachingStaffs = await prisma.coachingStaff.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const coachingStaffWithIdOnly = await prisma.coachingStaff.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CoachingStaffFindManyArgs>(args?: Prisma.SelectSubset<T, CoachingStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CoachingStaff.
     * @param {CoachingStaffCreateArgs} args - Arguments to create a CoachingStaff.
     * @example
     * // Create one CoachingStaff
     * const CoachingStaff = await prisma.coachingStaff.create({
     *   data: {
     *     // ... data to create a CoachingStaff
     *   }
     * })
     *
     */
    create<T extends CoachingStaffCreateArgs>(args: Prisma.SelectSubset<T, CoachingStaffCreateArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CoachingStaffs.
     * @param {CoachingStaffCreateManyArgs} args - Arguments to create many CoachingStaffs.
     * @example
     * // Create many CoachingStaffs
     * const coachingStaff = await prisma.coachingStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CoachingStaffCreateManyArgs>(args?: Prisma.SelectSubset<T, CoachingStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CoachingStaffs and returns the data saved in the database.
     * @param {CoachingStaffCreateManyAndReturnArgs} args - Arguments to create many CoachingStaffs.
     * @example
     * // Create many CoachingStaffs
     * const coachingStaff = await prisma.coachingStaff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CoachingStaffs and only return the `id`
     * const coachingStaffWithIdOnly = await prisma.coachingStaff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CoachingStaffCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CoachingStaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CoachingStaff.
     * @param {CoachingStaffDeleteArgs} args - Arguments to delete one CoachingStaff.
     * @example
     * // Delete one CoachingStaff
     * const CoachingStaff = await prisma.coachingStaff.delete({
     *   where: {
     *     // ... filter to delete one CoachingStaff
     *   }
     * })
     *
     */
    delete<T extends CoachingStaffDeleteArgs>(args: Prisma.SelectSubset<T, CoachingStaffDeleteArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CoachingStaff.
     * @param {CoachingStaffUpdateArgs} args - Arguments to update one CoachingStaff.
     * @example
     * // Update one CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CoachingStaffUpdateArgs>(args: Prisma.SelectSubset<T, CoachingStaffUpdateArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CoachingStaffs.
     * @param {CoachingStaffDeleteManyArgs} args - Arguments to filter CoachingStaffs to delete.
     * @example
     * // Delete a few CoachingStaffs
     * const { count } = await prisma.coachingStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CoachingStaffDeleteManyArgs>(args?: Prisma.SelectSubset<T, CoachingStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CoachingStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingStaffs
     * const coachingStaff = await prisma.coachingStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CoachingStaffUpdateManyArgs>(args: Prisma.SelectSubset<T, CoachingStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CoachingStaffs and returns the data updated in the database.
     * @param {CoachingStaffUpdateManyAndReturnArgs} args - Arguments to update many CoachingStaffs.
     * @example
     * // Update many CoachingStaffs
     * const coachingStaff = await prisma.coachingStaff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CoachingStaffs and only return the `id`
     * const coachingStaffWithIdOnly = await prisma.coachingStaff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CoachingStaffUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CoachingStaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CoachingStaff.
     * @param {CoachingStaffUpsertArgs} args - Arguments to update or create a CoachingStaff.
     * @example
     * // Update or create a CoachingStaff
     * const coachingStaff = await prisma.coachingStaff.upsert({
     *   create: {
     *     // ... data to create a CoachingStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingStaff we want to update
     *   }
     * })
     */
    upsert<T extends CoachingStaffUpsertArgs>(args: Prisma.SelectSubset<T, CoachingStaffUpsertArgs<ExtArgs>>): Prisma.Prisma__CoachingStaffClient<runtime.Types.Result.GetResult<Prisma.$CoachingStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CoachingStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffCountArgs} args - Arguments to filter CoachingStaffs to count.
     * @example
     * // Count the number of CoachingStaffs
     * const count = await prisma.coachingStaff.count({
     *   where: {
     *     // ... the filter for the CoachingStaffs we want to count
     *   }
     * })
    **/
    count<T extends CoachingStaffCountArgs>(args?: Prisma.Subset<T, CoachingStaffCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CoachingStaffCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CoachingStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachingStaffAggregateArgs>(args: Prisma.Subset<T, CoachingStaffAggregateArgs>): Prisma.PrismaPromise<GetCoachingStaffAggregateType<T>>;
    /**
     * Group by CoachingStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends CoachingStaffGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CoachingStaffGroupByArgs['orderBy'];
    } : {
        orderBy?: CoachingStaffGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CoachingStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CoachingStaff model
     */
    readonly fields: CoachingStaffFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CoachingStaff.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CoachingStaffClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    coaching<T extends Prisma.CoachingCenterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CoachingCenterDefaultArgs<ExtArgs>>): Prisma.Prisma__CoachingCenterClient<runtime.Types.Result.GetResult<Prisma.$CoachingCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the CoachingStaff model
 */
export interface CoachingStaffFieldRefs {
    readonly id: Prisma.FieldRef<"CoachingStaff", 'String'>;
    readonly staffId: Prisma.FieldRef<"CoachingStaff", 'String'>;
    readonly coachingId: Prisma.FieldRef<"CoachingStaff", 'String'>;
    readonly role: Prisma.FieldRef<"CoachingStaff", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CoachingStaff", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CoachingStaff", 'DateTime'>;
}
/**
 * CoachingStaff findUnique
 */
export type CoachingStaffFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter, which CoachingStaff to fetch.
     */
    where: Prisma.CoachingStaffWhereUniqueInput;
};
/**
 * CoachingStaff findUniqueOrThrow
 */
export type CoachingStaffFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter, which CoachingStaff to fetch.
     */
    where: Prisma.CoachingStaffWhereUniqueInput;
};
/**
 * CoachingStaff findFirst
 */
export type CoachingStaffFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter, which CoachingStaff to fetch.
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoachingStaffs to fetch.
     */
    orderBy?: Prisma.CoachingStaffOrderByWithRelationInput | Prisma.CoachingStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoachingStaffs.
     */
    cursor?: Prisma.CoachingStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoachingStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoachingStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoachingStaffs.
     */
    distinct?: Prisma.CoachingStaffScalarFieldEnum | Prisma.CoachingStaffScalarFieldEnum[];
};
/**
 * CoachingStaff findFirstOrThrow
 */
export type CoachingStaffFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter, which CoachingStaff to fetch.
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoachingStaffs to fetch.
     */
    orderBy?: Prisma.CoachingStaffOrderByWithRelationInput | Prisma.CoachingStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CoachingStaffs.
     */
    cursor?: Prisma.CoachingStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoachingStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoachingStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoachingStaffs.
     */
    distinct?: Prisma.CoachingStaffScalarFieldEnum | Prisma.CoachingStaffScalarFieldEnum[];
};
/**
 * CoachingStaff findMany
 */
export type CoachingStaffFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter, which CoachingStaffs to fetch.
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CoachingStaffs to fetch.
     */
    orderBy?: Prisma.CoachingStaffOrderByWithRelationInput | Prisma.CoachingStaffOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CoachingStaffs.
     */
    cursor?: Prisma.CoachingStaffWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CoachingStaffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CoachingStaffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CoachingStaffs.
     */
    distinct?: Prisma.CoachingStaffScalarFieldEnum | Prisma.CoachingStaffScalarFieldEnum[];
};
/**
 * CoachingStaff create
 */
export type CoachingStaffCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * The data needed to create a CoachingStaff.
     */
    data: Prisma.XOR<Prisma.CoachingStaffCreateInput, Prisma.CoachingStaffUncheckedCreateInput>;
};
/**
 * CoachingStaff createMany
 */
export type CoachingStaffCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingStaffs.
     */
    data: Prisma.CoachingStaffCreateManyInput | Prisma.CoachingStaffCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CoachingStaff createManyAndReturn
 */
export type CoachingStaffCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * The data used to create many CoachingStaffs.
     */
    data: Prisma.CoachingStaffCreateManyInput | Prisma.CoachingStaffCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CoachingStaff update
 */
export type CoachingStaffUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * The data needed to update a CoachingStaff.
     */
    data: Prisma.XOR<Prisma.CoachingStaffUpdateInput, Prisma.CoachingStaffUncheckedUpdateInput>;
    /**
     * Choose, which CoachingStaff to update.
     */
    where: Prisma.CoachingStaffWhereUniqueInput;
};
/**
 * CoachingStaff updateMany
 */
export type CoachingStaffUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingStaffs.
     */
    data: Prisma.XOR<Prisma.CoachingStaffUpdateManyMutationInput, Prisma.CoachingStaffUncheckedUpdateManyInput>;
    /**
     * Filter which CoachingStaffs to update
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * Limit how many CoachingStaffs to update.
     */
    limit?: number;
};
/**
 * CoachingStaff updateManyAndReturn
 */
export type CoachingStaffUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * The data used to update CoachingStaffs.
     */
    data: Prisma.XOR<Prisma.CoachingStaffUpdateManyMutationInput, Prisma.CoachingStaffUncheckedUpdateManyInput>;
    /**
     * Filter which CoachingStaffs to update
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * Limit how many CoachingStaffs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CoachingStaff upsert
 */
export type CoachingStaffUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * The filter to search for the CoachingStaff to update in case it exists.
     */
    where: Prisma.CoachingStaffWhereUniqueInput;
    /**
     * In case the CoachingStaff found by the `where` argument doesn't exist, create a new CoachingStaff with this data.
     */
    create: Prisma.XOR<Prisma.CoachingStaffCreateInput, Prisma.CoachingStaffUncheckedCreateInput>;
    /**
     * In case the CoachingStaff was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CoachingStaffUpdateInput, Prisma.CoachingStaffUncheckedUpdateInput>;
};
/**
 * CoachingStaff delete
 */
export type CoachingStaffDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
    /**
     * Filter which CoachingStaff to delete.
     */
    where: Prisma.CoachingStaffWhereUniqueInput;
};
/**
 * CoachingStaff deleteMany
 */
export type CoachingStaffDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingStaffs to delete
     */
    where?: Prisma.CoachingStaffWhereInput;
    /**
     * Limit how many CoachingStaffs to delete.
     */
    limit?: number;
};
/**
 * CoachingStaff without action
 */
export type CoachingStaffDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingStaff
     */
    select?: Prisma.CoachingStaffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CoachingStaff
     */
    omit?: Prisma.CoachingStaffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CoachingStaffInclude<ExtArgs> | null;
};
//# sourceMappingURL=CoachingStaff.d.ts.map